import { ZapfyTypes } from "./types";
export declare namespace ZapfySdk {
    namespace Instance {
        const connect: (params: ZapfyTypes.DefaultParams) => Promise<ZapfyTypes.ConnectInstanceResult>;
        const disconnect: (params: ZapfyTypes.DefaultParams) => Promise<ZapfyTypes.ConnectInstanceResult>;
        const getState: (params: ZapfyTypes.DefaultParams) => Promise<ZapfyTypes.GetInstanceStateResult>;
        const updateWebhook: (params: ZapfyTypes.UpdateWebhookParams) => Promise<ZapfyTypes.UpdateWebhookResult>;
    }
    namespace Profile {
        const verifyIfNumberIsInWhatsApp: (params: ZapfyTypes.DefaultParamsWithPhone) => Promise<ZapfyTypes.VerifyIfNumberIsInWhatsAppResult>;
        const getProfileStatus: (params: ZapfyTypes.DefaultParamsWithPhone) => Promise<ZapfyTypes.GetProfileStatusResult>;
        const updateProfileStatus: (params: ZapfyTypes.UpdateProfileStatusParams) => Promise<ZapfyTypes.UpdateProfileStatusResult>;
        const updateProfileName: (params: ZapfyTypes.UpdateProfileNameParams) => Promise<ZapfyTypes.UpdateProfileNameResult>;
        const getProfilePictureUrl: (params: ZapfyTypes.DefaultParamsWithPhone) => Promise<ZapfyTypes.UpdateProfilePictureResult>;
        const blockUser: (params: ZapfyTypes.DefaultParamsWithPhone) => Promise<ZapfyTypes.BlockUserResult>;
        const unblockUser: (params: ZapfyTypes.DefaultParamsWithPhone) => Promise<ZapfyTypes.BlockUserResult>;
        const getBusinessProfile: (params: ZapfyTypes.DefaultParamsWithPhone) => Promise<ZapfyTypes.GetBusinessProfileResult>;
    }
    namespace Message {
        const sendTextMessage: (params: ZapfyTypes.SendTextMessageParams) => Promise<ZapfyTypes.DefaultMessageResponse>;
        const sendButtonsMessage: (params: ZapfyTypes.SendButtonsMessageParams) => Promise<ZapfyTypes.DefaultMessageResponse>;
        const sendListMessage: (params: ZapfyTypes.SendListMessageParams) => Promise<ZapfyTypes.DefaultMessageResponse>;
        const sendLocationMessage: (params: ZapfyTypes.SendLocationParams) => Promise<ZapfyTypes.DefaultMessageResponse>;
    }
}
