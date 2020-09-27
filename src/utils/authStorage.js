import { AsyncStorage } from 'react-native';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        const rawToken = await AsyncStorage.getItem(`${this.namespace}:token`);
        return rawToken ? JSON.parse(rawToken) : [];
    }

    async setAccessToken(accessToken) {
        console.log('received token ', accessToken);
        await AsyncStorage.setItem(
            `${this.namespace}:token`,
            JSON.stringify(accessToken),
        );
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`);
    }
}

export default AuthStorage;