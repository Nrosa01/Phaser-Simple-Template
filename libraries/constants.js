const CT =
{
  gameWidth: 1280,
  gameHeight: 720,

  fullscreenKey: 'F',
  menuKey: 'Esc',
  menuAltKey: 'Space',

  cameraZoom: 1,

  numSlots: 8,
  inventoryVoid: 0,

  droppedItemSize: 0.50,

  invBarPosX: 20,
  invBarPosY: 340,
  textPosX: 10,
  textPosY: 10,
  textFont: 'font',
  textSize: 20,
  textAlign: 0,
  textSpacing: 1,

  alignmentBarX: 630,
  alignmentBarY: 50,
  alignmentMaxOffset: 85,
  alignmentMaxPoints: 100,

  transitionY: 100,
  transitionX: 400,

  fadeInTime: 250,
  fadeOutTime: 250,
  buttonAnimation: 50,

  backgroundMusic: {
    mute: false,
    volume: 0.1,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0
  },

  effectSounds: {
    mute: false,
    volume: 0.5,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0
  },
}

export default CT;