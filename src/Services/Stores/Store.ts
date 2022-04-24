import {StoreRouter} from "./StoreRouter";
import {PostController} from "./Post/Post.controller";
import {SettingController} from "./Settings/Setting.controller";

class RootStore {
    public routeStore: StoreRouter;
    public postStore: PostController;
    public settingStore: SettingController;

    constructor() {
        this.routeStore = new StoreRouter();
        this.postStore = new PostController(this);
        this.settingStore = new SettingController(this);

    }
}

const rootStore = new RootStore();
export default rootStore;