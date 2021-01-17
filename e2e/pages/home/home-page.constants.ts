export class HomePageConstants {
    static get attributes() {
        return {
            signUpNowClass: 'el-button control-button focusable free-subscribe-btn el-button--default',
            upgradeClass: 'el-button primary-button focusable orange-button focusable header-upgrade-btn el-button--default',
            settingDataHoook: 'settings_page_button',
            notificationDataHook: 'notification_bell'
        };
    }

    static get labels() {
        return {
            liveChannels: 'All live channels',
            myMedia: 'My Media',
            TV: 'Television',
            guide: 'Guide',
            search: 'Search'
        };
    }
}