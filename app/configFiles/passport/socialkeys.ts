export const keys={
    google:{
        clientID:'72911741942-vf6ivas3sovibdmipvglc8k2fs8jqnfl.apps.googleusercontent.com',
        clientSecret:'32rugAESdWoJ2yo4ZfCkjYaJ',
        callbackURL: '/auth/google/redirect'
    },
    facebook:{
        clientID:'320557301918842',
        clientSecret:'ff195ab7c1c8d82f44f82eb05688e3d5',
        callbackURL:'http://localhost:5000/auth/facebook/redirect'
    },
    database:{
        URL:'mongodb://localhost:27017/socialLogin'
    },
    session:{
    	cookieKey:'NeoSOFTTechnologies'
    }
}