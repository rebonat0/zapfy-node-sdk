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
    interface Contact {
        id: string;
        name?: string;
        notify?: string;
        verifiedName?: string;
        imgUrl?: string;
        status?: string;
    }
    type MediaType = 'image' | 'audio' | 'video' | 'document';
    type GroupParticipant = (Contact & {
        isAdmin?: boolean;
        isSuperAdmin?: boolean;
        admin?: 'admin' | 'superadmin' | null;
    });
    interface GroupMetadata {
        id: string;
        owner: string | undefined;
        subject: string;
        subjectOwner?: string;
        subjectTime?: number;
        creation?: number;
        desc?: string;
        descOwner?: string;
        descId?: string;
        restrict?: boolean;
        announce?: boolean;
        size?: number;
        participants: GroupParticipant[];
        ephemeralDuration?: number;
    }
    type GroupUpdateSubjectParams = DefaultParams & {
        groupId: string;
        subject: string;
    };
    type GroupUpdateDescriptionParams = DefaultParams & {
        groupId: string;
        description: string;
    };
    type GroupInviteCodeParams = DefaultParams & {
        groupId: string;
    };
    type GroupParticipantsUpdateParams = DefaultParams & {
        groupId: string;
        participants: string[];
        action: 'add' | 'demote' | 'promote' | 'remove';
    };
    type GroupSettingsUpdateParams = DefaultParams & {
        groupId: string;
        setting: 'announcement' | 'not_announcement' | 'unlocked' | 'locked';
    };
    type CreateGroupParams = DefaultParams & {
        name: string;
        participants: string[];
    };
    type CreateGroupResponse = DefaultZapfyResultObject<GroupMetadata>;
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
    type SendMediaMessageParams = DefaultParamsWithDestination & {
        type: MediaType;
        base64: string;
        text?: string;
        fileName?: string;
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
