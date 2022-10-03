import { AxiosResponse } from "axios";
import { client } from "./http/zapfy.http"
import { ConnectInstanceResult, GetInstanceStateResult } from "./types";

export namespace ZapfySdk {
    export namespace Instance {
        export const connect = async (instanceKey: string, instanceToken: string) => {
            try {
                
                const response = await client.post<
                    ConnectInstanceResult,
                    AxiosResponse<ConnectInstanceResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/connect`);

                return response.data;
            } catch (err) {}
        }

        export const getState = async (instanceKey: string, instanceToken: string) => {
            try {
                
                const response = await client.get<
                    GetInstanceStateResult,
                    AxiosResponse<GetInstanceStateResult>
                >(`/instance/${instanceKey}/token/${instanceToken}/getState`);

                return response.data;
            } catch (err) {}
        }

        export const updateWebhook = async (instanceKey: string, instanceToken: string, webhookUrl: string) => {
            try {
                
                const response = await client.post(`/instance/${instanceKey}/token/${instanceToken}/updateWebhook`, { webhookUrl });

                return response.data;
            } catch (err) {}
        }
    }
}