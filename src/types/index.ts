export namespace ZapfyTypes {
    export interface DefaultZapfyResultObject<T> {
        result?: T,
        isValid: boolean,
    };

    export type ListSection = {
        title: string,
        rows: { id: string, title: string }[],
    };

    export type MediaType = 'image' | 'audio' | 'video' | 'document';

    export type UpdateProfileStatusParams = DefaultParams & { status: string };
    export type UpdateProfileNameParams = DefaultParams & { name: string };
    export type DefaultParamsWithPhone = DefaultParams & { phoneNumber: string };
    export type DefaultParamsWithDestination = DefaultParams & { destination: string };
    export type UpdateWebhookParams = DefaultParams & { webhookUrl: string };
    
    export type SendLocationParams = DefaultParamsWithDestination & { lat: string, long: string };
    export type SendTextMessageParams = DefaultParamsWithDestination & { text: string };
    export type SendButtonsMessageParams = DefaultParamsWithDestination & {
        buttons: Button[],
        text: string,
        footer?: string,
    };
    export type SendListMessageParams = DefaultParamsWithDestination & {
        sections: ListSection[],
        buttonText: string,
        title: string,
        text: string,
        footer?: string,
    };

    export type Button = {
        id: string,
        body: string,
    };
    
    export type IsOnWhatsApp = {
        exists: boolean,
        jid: string,
    };
    
    export type BussinessProfileInfo = {
        wid: string,
        description: string,
        website: string[],
        category: string,
        business_hours: {},
    };
    
    export type ProfileStatus = {
        status: string,
        setAt: Date,
    };
    
    export type Instance = {
        id: number
        key: string
        token: string
        status: string
        name: string
        webhookUrl: string
        userId: number
        createdAt: Date
        updatedAt: Date
        deletedAt: Date | null
    }
    
    export type DefaultParams = {
        instanceKey: string,
        instanceToken: string,
    };
    
    export type InstanceState = 'disconnected' | 'connected';
    export type ConnectInstanceResult = DefaultZapfyResultObject<{ qrCode: string, state: InstanceState }>;
    export type GetInstanceStateResult = DefaultZapfyResultObject<{ state: InstanceState | { state: InstanceState, contact: { id: string, name: string }}}>;
    export type UpdateWebhookResult = DefaultZapfyResultObject<Instance>;
    export type VerifyIfNumberIsInWhatsAppResult = DefaultZapfyResultObject<IsOnWhatsApp>;
    export type GetProfileStatusResult = DefaultZapfyResultObject<ProfileStatus>;
    export type UpdateProfileStatusResult = DefaultZapfyResultObject<boolean>;
    export type UpdateProfileNameResult = DefaultZapfyResultObject<boolean>;
    export type UpdateProfilePictureResult = DefaultZapfyResultObject<string>;
    export type BlockUserResult = DefaultZapfyResultObject<boolean>;
    export type GetBusinessProfileResult = DefaultZapfyResultObject<BussinessProfileInfo>;
    export type DefaultMessageResponse = DefaultZapfyResultObject<{}>;
}