export declare namespace ZapfyTypes {
    interface DefaultZapfyResultObject<T> {
        result?: T;
        isValid: boolean;
    }
    type ListSection = {
        title: string;
        rows: {
            id: string;
            title: string;
        }[];
    };
    type MediaType = 'image' | 'audio' | 'video' | 'document';
    type UpdateProfileStatusParams = DefaultParams & {
        status: string;
    };
    type UpdateProfileNameParams = DefaultParams & {
        name: string;
    };
    type DefaultParamsWithPhone = DefaultParams & {
        phoneNumber: string;
    };
    type DefaultParamsWithDestination = DefaultParams & {
        destination: string;
    };
    type UpdateWebhookParams = DefaultParams & {
        webhookUrl: string;
    };
    type SendLocationParams = DefaultParamsWithDestination & {
        lat: string;
        long: string;
    };
    type SendTextMessageParams = DefaultParamsWithDestination & {
        text: string;
    };
    type SendButtonsMessageParams = DefaultParamsWithDestination & {
        buttons: Button[];
        text: string;
        footer?: string;
    };
    type SendListMessageParams = DefaultParamsWithDestination & {
        sections: ListSection[];
        buttonText: string;
        title: string;
        text: string;
        footer?: string;
    };
    type Button = {
        id: string;
        body: string;
    };
    type IsOnWhatsApp = {
        exists: boolean;
        jid: string;
    };
    type BussinessProfileInfo = {
        wid: string;
        description: string;
        website: string[];
        category: string;
        business_hours: {};
    };
    type ProfileStatus = {
        status: string;
        setAt: Date;
    };
    type Instance = {
        id: number;
        key: string;
        token: string;
        status: string;
        name: string;
        webhookUrl: string;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    };
    type DefaultParams = {
        instanceKey: string;
        instanceToken: string;
    };
    type InstanceState = 'disconnected' | 'connected';
    type ConnectInstanceResult = DefaultZapfyResultObject<{
        qrCode: string;
        state: InstanceState;
    }>;
    type GetInstanceStateResult = DefaultZapfyResultObject<{
        state: InstanceState | {
            state: InstanceState;
            contact: {
                id: string;
                name: string;
            };
        };
    }>;
    type UpdateWebhookResult = DefaultZapfyResultObject<Instance>;
    type VerifyIfNumberIsInWhatsAppResult = DefaultZapfyResultObject<IsOnWhatsApp>;
    type GetProfileStatusResult = DefaultZapfyResultObject<ProfileStatus>;
    type UpdateProfileStatusResult = DefaultZapfyResultObject<boolean>;
    type UpdateProfileNameResult = DefaultZapfyResultObject<boolean>;
    type UpdateProfilePictureResult = DefaultZapfyResultObject<string>;
    type BlockUserResult = DefaultZapfyResultObject<boolean>;
    type GetBusinessProfileResult = DefaultZapfyResultObject<BussinessProfileInfo>;
    type DefaultMessageResponse = DefaultZapfyResultObject<{}>;
}
