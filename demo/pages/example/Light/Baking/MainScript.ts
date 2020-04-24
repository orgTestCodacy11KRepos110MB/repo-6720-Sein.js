/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultCamera} from '../../utils';

export default class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    this.getGame().resource.load({type: 'GlTF', name: 'scene.gltf', url: getStaticAssetUrl('/assets/models/lightmap/scene.gltf'), ignoreTextureError: true});
  }

  public onCreate() {
    const game = this.getGame();

    createDefaultCamera(game, {position: new Sein.Vector3(0, 2, -6), target: new Sein.Vector3(0, 2, 0)});

    game.world.addActor('light', Sein.AmbientLightActor, {
      color: new Sein.Color(0, 0, 0),
      amount: .1
    });

    game.resource.instantiate<'GlTF'>(`scene.gltf`);
  }
}
