

interface Monitor {
    id: string;
    relationships?: {
      policy: {
        data: {
          id: string;
          type: string;
        };
      };
    };
    attributes: MonitorAttributes;
    type: string;
  }
  
interface MonitorAttributes {
    paused: boolean;
    regions: string[];
    policy_id: string;
    request_timeout: number;
    remember_cookies: boolean;
    maintenance_days: string[];
    expected_status_codes: number[];
    created_at: string;
    playwright_script?: string;
    team_wait: number;
    maintenance_from?: string;
    pronounceable_name: string;
    http_method: string;
    paused_at?: string;
    updated_at: string;
    auth_username: string;
    confirmation_period: number;
    sms: boolean;
    monitor_group_id: number;
    follow_redirects: boolean;
    email: boolean;
    domain_expiration: number;
    ssl_expiration: number;
    check_frequency: number;
    auth_password: string;
    recovery_period: number;
    url: string;
    push: boolean;
    last_checked_at: string;
    maintenance_timezone: string;
    call: boolean;
    required_keyword?: string;
    verify_ssl: boolean;
    request_body: string;
    port?: number;
    maintenance_to?: string;
    request_headers: string[];
    monitor_type: string;
    status: string;
}