import React from 'react'
import LikeIcon from "../../assets/like.svg"
import UnLikeIcon from "../../assets/unlike.svg"

export default function LikeUnlike() {
  return (
    //  {/* <!-- like/unlike --> */}
     <div class="flex gap-10 w-48">
     <div class="flex gap-1">
         <div class="shrink-0">
             <img
                 class="w-5 block"
                 src={LikeIcon}
                 alt="Like"
             />
         </div>
         <div
             class="text-sm leading-[1.7142857] text-slate-600"
         >
             100K
         </div>
     </div>
     <div class="flex gap-1">
         <div class="shrink-0">
             <img
                 class="w-5 block"
                 src={UnLikeIcon}
                 alt="Unlike"
             />
         </div>
         <div
             class="text-sm leading-[1.7142857] text-slate-600"
         >
             100K
         </div>
     </div>
 </div>
  )
}
