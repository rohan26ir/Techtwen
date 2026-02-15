import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default async function Icon() {
  try {
    // Try to read the favicon file
    const imagePath = path.join(process.cwd(), 'public', 'icon', 'icons8-t-pose-32.png')
    const imageBuffer = fs.readFileSync(imagePath)
    
    // Return the actual favicon image
    return new ImageResponse(
      (
        <Image 
          src={`data:image/png;base64,${imageBuffer.toString('base64')}`}
          width={32}
          height={32}
          alt="favicon"
        />
      ),
      {
        ...size,
      }
    )
  } catch (error) {
    // Fall back to the "T" if image loading fails
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 24,
            background: 'black',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'White',
          }}
        >
          T
        </div>
      ),
      {
        ...size,
      }
    )
  }
}