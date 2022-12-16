// 定数の定義
// 螺旋が何回転するか定義
export const SPIRAL_LOOP = 8
// 螺旋の１周ごとにいくつのアイテムを置くか定義
export const SPIRAL_SPLIT = 8
// 高さを変化させるか
export const SPIRAL_OFFSET_Y = .1
// アイテムひとつごとにどれだけ変化するか
export const SPIRAL_OFFSET_ANGLE_RAD = Math.PI * 2 / SPIRAL_SPLIT
// 螺旋状のトータル個数
export const NUM_TOTAL_ITEM = SPIRAL_SPLIT * SPIRAL_LOOP
// 画像の縦横比
export const PLANE_ASPECT = 16 / 9
export const MODELS = ["dog.glb", 'rabbit.glb', 'lion.glb']

export const ITEMS = Array(NUM_TOTAL_ITEM).fill(0)
  .map((v, i) => {
  if (i < 3) {
    return {
      title: `DummyTitle`,
      model: MODELS[i]
    }
  }
  const j = i.toString().padStart(2, '0')
  return {
    title: `DummyTitle${i}`,
    texture: `dummy${j}.svg`,
    youtubeId: 'BFNekjEqvuk',
  }
})