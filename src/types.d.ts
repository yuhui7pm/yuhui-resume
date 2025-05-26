declare module 'dom-to-image-more' {
  export function toPng(
    node: HTMLElement,
    options?: {
      quality?: number
      scale?: number
      bgcolor?: string
    }
  ): Promise<string>

  export function toJpeg(
    node: HTMLElement,
    options?: {
      quality?: number
      scale?: number
      bgcolor?: string
    }
  ): Promise<string>

  export function toBlob(
    node: HTMLElement,
    options?: {
      quality?: number
      scale?: number
      bgcolor?: string
    }
  ): Promise<Blob>

  export function toPixelData(
    node: HTMLElement,
    options?: {
      quality?: number
      scale?: number
      bgcolor?: string
    }
  ): Promise<Uint8ClampedArray>

  export default {
    toPng,
    toJpeg,
    toBlob,
    toPixelData,
  }
}
