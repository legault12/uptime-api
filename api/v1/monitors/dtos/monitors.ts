// TODO: Enhance WebsiteStatus Model
// 1. Further define the structure and properties as project requirements become clearer. Consider potential additional fields related to website monitoring and analysis.
// 2. Implement data validation within the model to ensure the integrity of the data being processed and stored.
// 3. Integrate this model into the controllers. Update controller logic to utilize this model for creating, updating, and processing website status data.
// 4. Review and potentially add methods that might be necessary for handling more complex operations or calculations related to website status.
// Note: This is an initial model structure and is subject to change as the application requirements evolve.

class WebsiteStatus {
    url: string;
    isUp: boolean;
    outages: number;
    uptime: number;
    downtime: number;

    constructor(url: string, isUp: boolean, outages: number, uptime: number, downtime: number) {
        this.url = url;
        this.isUp = isUp;
        this.outages = outages;
        this.uptime = uptime;
        this.downtime = downtime;
    }

    updateStatus({ isUp, outages, uptime, downtime }: { isUp?: boolean, outages?: number, uptime?: number, downtime?: number }): void {
        this.isUp = isUp !== undefined ? isUp : this.isUp;
        this.outages = outages !== undefined ? outages : this.outages;
        this.uptime = uptime !== undefined ? uptime : this.uptime;
        this.downtime = downtime !== undefined ? downtime : this.downtime;
    }

    toFirestore(): { url: string, isUp: boolean, outages: number, uptime: number, downtime: number } {
        return {
            url: this.url,
            isUp: this.isUp,
            outages: this.outages,
            uptime: this.uptime,
            downtime: this.downtime,
        };
    }
}

export default WebsiteStatus;
