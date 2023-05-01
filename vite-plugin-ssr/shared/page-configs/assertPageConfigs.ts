export { assertPlusConfigs }
export { assertPlusConfigGlobal }

import { assert, isObject, hasProp, assertUsage, isCallable } from '../utils'
import type { PlusConfig, PlusConfigGlobal } from './PlusConfig'

function assertPlusConfigs(plusConfigs: unknown): asserts plusConfigs is PlusConfig[] {
  assert(Array.isArray(plusConfigs) || plusConfigs === null)
  // TODO: remove obsolete comment?
  // if `plusConfigFilesCannotBeLoaded === null` => then `import.meta.glob('/**/+config.${scriptFileExtensions}', { eager: true })` cannot be transpiled/loaded => code of virtual file cannot be generated or run => assertPlusConfigs() is never called
  assert(plusConfigs !== null)
  plusConfigs.forEach((plusConfig) => {
    assert(isObject(plusConfig))
    assert(hasProp(plusConfig, 'pageId', 'string'))
    assert(hasProp(plusConfig, 'plusConfigFilePathAll', 'string[]'))
    assert(hasProp(plusConfig, 'routeFilesystem', 'string') || hasProp(plusConfig, 'routeFilesystem', 'null'))
    assert(hasProp(plusConfig, 'routeFilesystemDefinedBy', 'string'))
    assert(hasProp(plusConfig, 'loadPlusValueFiles', 'function'))
    assert(hasProp(plusConfig, 'isErrorPage', 'boolean'))
    assert(hasProp(plusConfig, 'configElements', 'object'))
    assertConfigElements(plusConfig.configElements, false)
  })
}

function assertPlusConfigGlobal(plusConfigGlobal: unknown): asserts plusConfigGlobal is PlusConfigGlobal {
  assertConfigElements(plusConfigGlobal, true)
}

function assertConfigElements(configElements: unknown, isGlobalConfig: boolean) {
  assert(isObject(configElements))
  Object.entries(configElements).forEach(([configName, configElement]) => {
    assert(isObject(configElement) || configElement === null)
    if (configElement === null) {
      assert(isGlobalConfig)
      return
    }
    assert(hasProp(configElement, 'configDefinedAt', 'string'))
    assert(
      hasProp(configElement, 'plusConfigFilePath', 'string') || hasProp(configElement, 'plusConfigFilePath', 'null')
    )
    assert(hasProp(configElement, 'configEnv', 'string'))
    assert(
      hasProp(configElement, 'plusValueFilePath', 'string') || hasProp(configElement, 'plusValueFilePath', 'null')
    )
    assert(
      hasProp(configElement, 'plusValueFileExport', 'string') ||
        hasProp(configElement, 'plusValueFileExport', 'null')
    )
    if (isGlobalConfig) {
      assert(hasProp(configElement, 'configValue'))
    }
    if (configElement.plusValueFilePath) {
      const { plusValueFilePath } = configElement
      if (configName === 'route') {
        assert(hasProp(configElement, 'configValue')) // route files are eagerly loaded
        const { configValue } = configElement
        const configValueType = typeof configValue
        // TODO: validate earlier?
        assertUsage(
          configValueType === 'string' || isCallable(configValue),
          `${plusValueFilePath} has a default export with an invalid type '${configValueType}': the default export should be a string or a function`
        )
      }
    }
  })
}
