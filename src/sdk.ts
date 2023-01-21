import { AxiosResponse } from "axios";
import { client } from "./http/zapfy.http"
import { 
    ZapfyTypes,
} from "./types";

export namespace ZapfySdk {
    export namespace Instance {
        export const connect = async (
            params: ZapfyTypes.DefaultParams
        ): Promise<ZapfyTypes.ConnectInstanceResult> => {
            try {
                
                const response = await client.post<
                    ZapfyTypes.ConnectInstanceResult,
                    AxiosResponse<ZapfyTypes.ConnectInstanceResult> 
                >(`/instance/${params.instanceKey}/token/${params.instanceToken}/connect`);

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const disconnect = async (
            params: ZapfyTypes.DefaultParams
        ): Promise<ZapfyTypes.ConnectInstanceResult> => {
            try {
                
                const response = await client.post<
                    ZapfyTypes.ConnectInstanceResult,
                    AxiosResponse<ZapfyTypes.ConnectInstanceResult> 
                >(`/instance/${params.instanceKey}/token/${params.instanceToken}/disconnect`);

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const getState = async (
            params: ZapfyTypes.DefaultParams
        ): Promise<ZapfyTypes.GetInstanceStateResult> => {
            try {
                
                const response = await client.get<
                    ZapfyTypes.GetInstanceStateResult,
                    AxiosResponse<ZapfyTypes.GetInstanceStateResult>
                >(`/instance/${params.instanceKey}/token/${params.instanceToken}/getState`);

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const updateWebhook = async (
            params: ZapfyTypes.UpdateWebhookParams
        ): Promise<ZapfyTypes.UpdateWebhookResult> => {
            try {
                const { 
                    instanceKey, 
                    instanceToken, 
                    webhookUrl
                } = params;
                
                const response = await client.post<
                    ZapfyTypes.UpdateWebhookResult,
                    AxiosResponse<ZapfyTypes.UpdateWebhookResult>
                >(`/instance/${instanceKey}/token/${instanceToken}/updateWebhook`, { webhookUrl });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }
    }

    export namespace Profile {
        export const verifyIfNumberIsInWhatsApp = async (
            params: ZapfyTypes.DefaultParamsWithPhone
        ): Promise<ZapfyTypes.VerifyIfNumberIsInWhatsAppResult> => {
            try {
                const  {
                    instanceKey, 
                    instanceToken, 
                    phoneNumber,
                } = params;

                const response = await client.post<
                    ZapfyTypes.VerifyIfNumberIsInWhatsAppResult,
                    AxiosResponse<ZapfyTypes.VerifyIfNumberIsInWhatsAppResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/onWhatsApp`, { phoneNumber });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const getProfileStatus = async (
            params: ZapfyTypes.DefaultParamsWithPhone
        ): Promise<ZapfyTypes.GetProfileStatusResult> => {
            try {
                const  {
                    instanceKey, 
                    instanceToken, 
                    phoneNumber,
                } = params;

                const response = await client.post<
                    ZapfyTypes.GetProfileStatusResult,
                    AxiosResponse<ZapfyTypes.GetProfileStatusResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/getProfileStatus`, { phoneNumber });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const updateProfileStatus = async (
            params: ZapfyTypes.UpdateProfileStatusParams,
        ): Promise<ZapfyTypes.UpdateProfileStatusResult> => {
            try {

                const {
                    instanceKey, 
                    instanceToken, 
                    status,
                } = params;

                const response = await client.post<
                    ZapfyTypes.UpdateProfileStatusResult,
                    AxiosResponse<ZapfyTypes.UpdateProfileStatusResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/updateProfileStatus`, { status });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const updateProfileName = async (
            params: ZapfyTypes.UpdateProfileNameParams,
        ): Promise<ZapfyTypes.UpdateProfileNameResult> => {
            try {
                const {
                    instanceKey, 
                    instanceToken, 
                    name,
                } = params;

                const response = await client.post<
                    ZapfyTypes.UpdateProfileNameResult,
                    AxiosResponse<ZapfyTypes.UpdateProfileNameResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/updateProfileName`, { name });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const getProfilePictureUrl = async (
            params: ZapfyTypes.DefaultParamsWithPhone
        ): Promise<ZapfyTypes.UpdateProfilePictureResult> => {
            try {
                const  {
                    instanceKey, 
                    instanceToken, 
                    phoneNumber,
                } = params;

                const response = await client.post<
                    ZapfyTypes.UpdateProfilePictureResult,
                    AxiosResponse<ZapfyTypes.UpdateProfilePictureResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/getProfilePictureUrl`, { phoneNumber });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const blockUser = async (
            params: ZapfyTypes.DefaultParamsWithPhone
        ): Promise<ZapfyTypes.BlockUserResult> => {
            try {
                const  {
                    instanceKey, 
                    instanceToken, 
                    phoneNumber,
                } = params;

                const response = await client.post<
                    ZapfyTypes.BlockUserResult,
                    AxiosResponse<ZapfyTypes.BlockUserResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/blockUser`, { phoneNumber });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const unblockUser = async (
            params: ZapfyTypes.DefaultParamsWithPhone
        ): Promise<ZapfyTypes.BlockUserResult> => {
            try {
                const  {
                    instanceKey, 
                    instanceToken, 
                    phoneNumber,
                } = params;

                const response = await client.post<
                    ZapfyTypes.BlockUserResult,
                    AxiosResponse<ZapfyTypes.BlockUserResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/unblockUser`, { phoneNumber });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const getBusinessProfile = async (
            params: ZapfyTypes.DefaultParamsWithPhone
        ): Promise<ZapfyTypes.GetBusinessProfileResult> => {
            try {
                const  {
                    instanceKey, 
                    instanceToken, 
                    phoneNumber,
                } = params;

                const response = await client.post<
                    ZapfyTypes.GetBusinessProfileResult,
                    AxiosResponse<ZapfyTypes.GetBusinessProfileResult> 
                >(`/instance/${instanceKey}/token/${instanceToken}/getBusinessProfile`, { phoneNumber });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }
    }
    export namespace Message {
        export const sendTextMessage = async (
           params: ZapfyTypes.SendTextMessageParams,
        ): Promise<ZapfyTypes.DefaultMessageResponse> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    text,
                    destination,
                } = params;

                const response = await client.post<
                    ZapfyTypes.DefaultMessageResponse,
                    AxiosResponse<ZapfyTypes.DefaultMessageResponse> 
                >(`/instance/${instanceKey}/token/${instanceToken}/message?type=text`, { text, destination });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const sendButtonsMessage = async (
            params: ZapfyTypes.SendButtonsMessageParams,
        ): Promise<ZapfyTypes.DefaultMessageResponse> => {
            try {
                const {
                    instanceKey, 
                    instanceToken, 
                    destination,
                    buttons,
                    text,
                    footer,
                } = params;
                const response = await client.post<
                    ZapfyTypes.DefaultMessageResponse,
                    AxiosResponse<ZapfyTypes.DefaultMessageResponse> 
                >(`/instance/${instanceKey}/token/${instanceToken}/message?type=buttons`, { text, footer, buttons, destination });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const sendListMessage = async (
            params: ZapfyTypes.SendListMessageParams,
        ): Promise<ZapfyTypes.DefaultMessageResponse> => {
            try {
                const {
                    text,
                    buttonText,
                    title,
                    destination,
                    sections,
                    instanceKey,
                    instanceToken,
                } = params;
                
                const response = await client.post<
                    ZapfyTypes.DefaultMessageResponse,
                    AxiosResponse<ZapfyTypes.DefaultMessageResponse> 
                >(`/instance/${instanceKey}/token/${instanceToken}/message?type=list`, { 
                    text,
                    buttonText,
                    title,
                    destination,
                    sections,
                    instanceKey,
                    instanceToken,
                });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const sendLocationMessage = async (
            params: ZapfyTypes.SendLocationParams,
        ): Promise<ZapfyTypes.DefaultMessageResponse> => {
            try {
                const {
                    lat,
                    long,
                    instanceKey,
                    instanceToken,
                } = params;
                
                const response = await client.post<
                    ZapfyTypes.DefaultMessageResponse,
                    AxiosResponse<ZapfyTypes.DefaultMessageResponse> 
                >(`/instance/${instanceKey}/token/${instanceToken}/message?type=location`, { 
                    lat,
                    long,
                    instanceKey,
                    instanceToken,
                });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const sendMediaMessage = async (
            params: ZapfyTypes.SendMediaMessageParams,
        ): Promise<ZapfyTypes.DefaultMessageResponse> => {
            try {
                const {
                    base64,
                    fileName,
                    type,
                    instanceKey,
                    instanceToken,
                    text,
                } = params;
                
                const response = await client.post<
                    ZapfyTypes.DefaultMessageResponse,
                    AxiosResponse<ZapfyTypes.DefaultMessageResponse> 
                >(`/instance/${instanceKey}/token/${instanceToken}/message?type=${type}`, { 
                    base64,
                    fileName,
                    text,
                });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }
    }

    export namespace Group {
        export const createGroup = async (
            params: ZapfyTypes.CreateGroupParams,
        ): Promise<ZapfyTypes.CreateGroupResponse> => {
             try {
                const { 
                    instanceKey,
                    instanceToken,
                    name,
                    participants,
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.CreateGroupResponse,
                    AxiosResponse<ZapfyTypes.CreateGroupResponse> 
                >(`/instance/${instanceKey}/token/${instanceToken}/createGroup`, { name, participants });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupUpdateSubject = async (
            params: ZapfyTypes.GroupUpdateSubjectParams,
        ): Promise<ZapfyTypes.DefaultZapfyResultObject<void>> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    groupId,
                    subject,
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<void>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<void>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupUpdateSubject`, { groupId, subject });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupUpdateDescription = async (
            params: ZapfyTypes.GroupUpdateDescriptionParams,
        ): Promise<ZapfyTypes.DefaultZapfyResultObject<void>> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    groupId,
                    description,
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<void>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<void>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupUpdateDescription`, { groupId, description });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupInviteCode = async (
            params: ZapfyTypes.GroupInviteCodeParams,
        ): Promise<ZapfyTypes.DefaultZapfyResultObject<string>> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    groupId,
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<string>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<string>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupInviteCode`, { groupId });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupRevokeInvite = async (
            params: ZapfyTypes.GroupInviteCodeParams,
        ): Promise<ZapfyTypes.DefaultZapfyResultObject<string>> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    groupId,
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<string>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<string>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupRevokeInvite`, { groupId });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupMetadata = async (
            params: ZapfyTypes.GroupInviteCodeParams,
        ): Promise<ZapfyTypes.DefaultZapfyResultObject<ZapfyTypes.GroupMetadata>> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    groupId,
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<ZapfyTypes.GroupMetadata>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<ZapfyTypes.GroupMetadata>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupMetadata`, { groupId });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupGetInviteInfo = async (params: ZapfyTypes.GroupGetInviteInfoParams) => {
            try {
                const { instanceKey, instanceToken, invite } = params;

                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<ZapfyTypes.GroupMetadata>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<ZapfyTypes.GroupMetadata>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupGetInviteInfo`, { invite });

                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupParticipantsUpdate = async (
            params: ZapfyTypes.GroupParticipantsUpdateParams,
        ): Promise<ZapfyTypes.DefaultZapfyResultObject<{ status: string, jid: string }[]>> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    groupId,
                    action,
                    participants
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<{ status: string, jid: string }[]>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<{ status: string, jid: string }[]>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupParticipantsUpdate`, { 
                    groupId,  
                    action,
                    participants,
                });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }

        export const groupSettingUpdate = async (
            params: ZapfyTypes.GroupSettingsUpdateParams,
        ): Promise<ZapfyTypes.DefaultZapfyResultObject<void>> => {
            try {
                const { 
                    instanceKey,
                    instanceToken,
                    groupId,
                    setting,
                } = params;
 
                const response = await client.post<
                    ZapfyTypes.DefaultZapfyResultObject<void>,
                    AxiosResponse<ZapfyTypes.DefaultZapfyResultObject<void>> 
                >(`/instance/${instanceKey}/token/${instanceToken}/groupSettingUpdate`, { 
                    groupId,  
                    setting,
                });
 
                return response.data;
            } catch (err: any) {
                throw new Error(err);
            }
        }
    }
}