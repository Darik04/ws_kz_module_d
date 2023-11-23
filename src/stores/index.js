import { createStore } from 'vuex';
import { auth } from './auth.module';
import { chatterblast } from './chatterblast.module';
import { dreamweaver } from './dreamweaver.module';
import { mindreader } from './mindreader.module';


export default new createStore({
    modules: {
        auth,
        chatterblast,
        dreamweaver,
        mindreader
    }
})