import {WebPlugin} from '@capacitor/core';

import type {AllowedResult, HealthConnectPlugin} from './definitions';

export class HealthConnectPluginWeb extends WebPlugin implements HealthConnectPlugin {

    constructor() {
        super({
            name: 'HealthConnect',
            platforms: ['web'],
        });
    }

    async connectToHealthConnect(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async isAllowed(): Promise<AllowedResult> {
        throw new Error('Method not implemented.');
    }

    async getHistory(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async getHistoryActivity(): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
