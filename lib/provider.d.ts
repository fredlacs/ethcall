import { BaseProvider } from '@ethersproject/providers';
import { Call } from './call';
export default class Provider {
    provider?: BaseProvider;
    multicallAddress: string;
    constructor();
    init(provider: BaseProvider, multicallAddress?: string): Promise<void>;
    getEthBalance(address: string): any;
    all(calls: Call[]): Promise<any[]>;
}
