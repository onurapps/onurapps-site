import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: '#080c14',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1ae885',
          borderRadius: '50%',
          fontWeight: 'bold',
        }}
      >
        O
      </div>
    ),
    {
      ...size,
    }
  );
} 