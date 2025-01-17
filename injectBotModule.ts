import { World } from '@xrengine/engine/src/ecs/classes/World'
import { initSystems } from '@xrengine/engine/src/ecs/functions/SystemFunctions'
import { SystemUpdateType } from '@xrengine/engine/src/ecs/functions/SystemUpdateType'
import BotHookSystem from './src/functions/BotHookSystem'

export default async function injectBotModule(world: World) {
  await initSystems(world, [
    {
      uuid: 'xre.bot.BotHookSystem',
      type: SystemUpdateType.FIXED,
      systemLoader: () => Promise.resolve({ default: BotHookSystem })
    }
  ])
}
