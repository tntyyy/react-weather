let startX: never | number, startY: never | number, endingX: never | number, endingY: never | number;
let moving: boolean = false;

export const handlerSwipeStart = (e: any) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}

export const handlerSwipeMove = (e: any) => {
  moving = true;
  endingX = e.touches[0].clientX;
  endingY = e.touches[0].clientY;
}

export const handlerSwipeEnd = (e: any) => {
  if (!moving) return;
  if (!( Math.abs(endingX - startX) > Math.abs(endingY - startY))) {
      if ( endingY > startY ) {
        return false;
      } else {
        return true;
      }
  }
  moving = false;
}