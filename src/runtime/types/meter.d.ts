import type { meter } from '../ui.config'
import type colors from '#ui-colors'

export type MeterSize = keyof typeof meter.meter.size
export type MeterColor = keyof typeof meter.color | typeof colors[number]
