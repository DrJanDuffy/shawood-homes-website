interface FollowUpBossLead {
  name: string;
  email: string;
  phone?: string;
  source: string;
  message?: string;
  tags?: string[];
  customFields?: Record<string, any>;
}

interface CRMIntegration {
  createLead(lead: FollowUpBossLead): Promise<{ success: boolean; leadId?: string; error?: string }>;
}

export class FollowUpBossIntegration implements CRMIntegration {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    this.apiKey = process.env.FOLLOWUP_BOSS_API_KEY || 'fka_0N4mnNExuqeS5HXjPWqoFADl12EArIejYR';
    this.apiUrl = process.env.FOLLOWUP_BOSS_API_URL || 'https://api.followupboss.com/v1';
  }

  async createLead(lead: FollowUpBossLead): Promise<{ success: boolean; leadId?: string; error?: string }> {
    try {
      if (!this.apiKey) {
        throw new Error('Follow Up Boss API key not configured');
      }

      const response = await fetch(`${this.apiUrl}/people`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: lead.name.split(' ')[0],
          lastName: lead.name.split(' ').slice(1).join(' ') || '',
          emails: [{ value: lead.email, type: 'work' }],
          phones: lead.phone ? [{ value: lead.phone, type: 'mobile' }] : [],
          source: lead.source,
          notes: lead.message ? `Website inquiry: ${lead.message}` : 'Website lead from Arcadia Homes Las Vegas',
          tags: [
            'Arcadia Homes Las Vegas',
            'Summerlin West',
            'Luxury Real Estate',
            ...(lead.tags || [])
          ],
          assignedTo: 'DrDuffy@bhhsnv.com', // Dr. Jan Duffy's email
          customFields: {
            website_source: 'arcadiahomeslasvegas.com',
            lead_type: 'luxury_buyer',
            price_range: '$2M-$4M',
            location_interest: 'Summerlin West 89135',
            ...lead.customFields
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Follow Up Boss API error: ${response.status} - ${errorData}`);
      }

      const result = await response.json();
      
      console.log('Lead successfully created in Follow Up Boss:', {
        leadId: result.id,
        name: lead.name,
        email: lead.email,
        source: lead.source
      });

      return {
        success: true,
        leadId: result.id
      };

    } catch (error) {
      console.error('Error creating lead in Follow Up Boss:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  // Additional method for updating existing leads
  async updateLead(leadId: string, updates: Partial<FollowUpBossLead>): Promise<{ success: boolean; error?: string }> {
    try {
      if (!this.apiKey) {
        throw new Error('Follow Up Boss API key not configured');
      }

      const response = await fetch(`${this.apiUrl}/people/${leadId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Follow Up Boss API error: ${response.status} - ${errorData}`);
      }

      return { success: true };

    } catch (error) {
      console.error('Error updating lead in Follow Up Boss:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  // Method to add notes to existing leads
  async addNote(leadId: string, note: string): Promise<{ success: boolean; error?: string }> {
    try {
      if (!this.apiKey) {
        throw new Error('Follow Up Boss API key not configured');
      }

      const response = await fetch(`${this.apiUrl}/people/${leadId}/notes`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: note,
          author: 'DrDuffy@bhhsnv.com'
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Follow Up Boss API error: ${response.status} - ${errorData}`);
      }

      return { success: true };

    } catch (error) {
      console.error('Error adding note to lead in Follow Up Boss:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }
}

// Create singleton instance
export const crmIntegration = new FollowUpBossIntegration();