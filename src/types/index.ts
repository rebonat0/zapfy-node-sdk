export interface DefaultZapfyResultObject<T> {
    result?: T,
    isValid: boolean,
};

export type InstanceState = 'disconnected' | 'connected';

export type ConnectInstanceResult = DefaultZapfyResultObject<{ qrCode: string, state: InstanceState }>;


export type GetInstanceStateResult = DefaultZapfyResultObject<{ state: InstanceState | { state: InstanceState, contact: { id: string, name: string }}}>;
