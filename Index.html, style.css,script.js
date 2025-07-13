<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1" name="viewport"/>
  <title>
   Fenty Skin Checkout
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&amp;family=Roboto&amp;display=swap" rel="stylesheet"/>
  <style>
   body {
      font-family: 'Roboto', sans-serif;
      background-color: #f0e0d8;
    }
    .font-playfair {
      font-family: 'Playfair Display', serif;
    }
    /* Custom scrollbar for order list */
    .scrollbar-thin::-webkit-scrollbar {
      width: 6px;
    }
    .scrollbar-thin::-webkit-scrollbar-track {
      background: transparent;
    }
    .scrollbar-thin::-webkit-scrollbar-thumb {
      background-color: #a78bfa;
      border-radius: 10px;
    }
  </style>
 </head>
 <body class="bg-[#f0e0d8] min-h-screen flex items-center justify-center p-4">
  <div class="max-w-[1024px] w-full bg-[#f9f8fc] border border-black rounded-[24px] p-6 relative flex flex-col md:flex-row md:justify-between" style="min-height: 600px">
   <!-- Top left and right text -->
   <div class="flex justify-between w-full absolute top-6 left-6 right-6 px-4 md:px-0">
    <div class="text-[12px] font-normal text-black/80 select-none">
     BACK TO SHOP
    </div>
    <div class="text-[12px] font-normal text-black/80 select-none">
     NEED HELP?
    </div>
   </div>
   <!-- Center FENTY logo text -->
   <div class="absolute top-6 left-1/2 -translate-x-1/2 font-playfair font-extrabold text-[24px] tracking-widest select-none">
    FENTY
   </div>
   <!-- Left side form -->
   <form class="flex flex-col justify-start gap-6 w-full md:w-[55%] pt-12 md:pt-0">
    <h1 class="font-playfair text-[40px] font-normal leading-[1.1] text-black select-none">
     Checkout
    </h1>
    <!-- Steps -->
    <div class="flex items-center gap-2 text-[12px] text-black/50 font-normal select-none">
     <div class="flex items-center gap-1">
      <div class="w-5 h-5 rounded-full border border-black/50 flex items-center justify-center text-black/50 font-normal">
       1
      </div>
      <span>
       Contact information
      </span>
     </div>
     <span>
      →
     </span>
     <div class="flex items-center gap-1 font-semibold italic">
      <div class="w-5 h-5 rounded-full border border-black flex items-center justify-center text-black font-semibold italic">
       2
      </div>
      <span>
       Shipping
      </span>
     </div>
     <span>
      →
     </span>
     <div class="flex items-center gap-1 text-black/30">
      <div class="w-5 h-5 rounded-full border border-black/30 flex items-center justify-center text-black/30">
       3
      </div>
      <span>
       Payment
      </span>
     </div>
    </div>
    <!-- Country and City -->
    <div class="flex flex-col sm:flex-row gap-6">
     <div class="flex flex-col w-full sm:w-1/2">
      <label class="text-[10px] uppercase font-normal text-black/40 mb-1 select-none" for="country">
       Country
      </label>
      <select class="border-b border-black/50 bg-transparent text-[14px] py-1 pr-6 appearance-none focus:outline-none" id="country" name="country">
       <option>
        Ukraine
       </option>
      </select>
     </div>
     <div class="flex flex-col w-full sm:w-1/2">
      <label class="text-[10px] uppercase font-normal text-black/40 mb-1 select-none" for="city">
       City
      </label>
      <select class="border-b border-black/50 bg-transparent text-[14px] py-1 pr-6 appearance-none focus:outline-none" id="city" name="city">
       <option>
        Odesa
       </option>
      </select>
     </div>
    </div>
    <!-- Address -->
    <div class="flex flex-col w-full">
     <label class="text-[10px] uppercase font-normal text-black/40 mb-1 select-none" for="address">
      Address
     </label>
     <input class="border-b border-black/50 bg-transparent text-[14px] py-1 focus:outline-none" id="address" name="address" placeholder="" type="text"/>
    </div>
    <!-- Bottom buttons -->
    <div class="flex items-center justify-between mt-6">
     <button class="text-[10px] font-normal text-black/40 underline decoration-black/40 decoration-1 cursor-pointer select-none" type="button">
      BACK TO CONTACT INFO
     </button>
     <button class="text-[14px] font-semibold text-[#a78bfa] border border-[#a78bfa] rounded-full px-8 py-2 hover:bg-[#a78bfa] hover:text-white transition select-none" type="submit">
      PAYMENT
     </button>
    </div>
   </form>
   <!-- Right side order list -->
   <section aria-label="Order list" class="w-full md:w-[40%] border border-black rounded-md p-4 flex flex-col scrollbar-thin overflow-y-auto max-h-[520px]">
    <h2 class="font-playfair text-[24px] font-normal mb-4 select-none">
     Order list
    </h2>
    <!-- Order item 1 -->
    <div class="flex gap-4 border-b border-black/30 pb-4 mb-4 last:border-b-0 last:mb-0">
     <img alt="Niacinamide pore-refining toner serum bottle with purple cap on light purple background" class="w-20 h-20 object-contain" height="80" src="https://storage.googleapis.com/a1aa/image/2c32d510-a9d8-4f8e-61aa-4837e83b5e8b.jpg" width="80"/>
     <div class="flex flex-col text-[10px] text-black/90 font-normal leading-[1.2]">
      <span class="font-semibold uppercase tracking-tight mb-1 select-none">
       NIACINAMIDE PORE-REFINING TONER SERUM
      </span>
      <div class="flex justify-between mb-0.5">
       <span class="uppercase text-[8px] text-black/50 select-none">
        Quantity
       </span>
       <span class="text-[8px] select-none">
        1
       </span>
      </div>
      <div class="flex justify-between mb-2">
       <span class="uppercase text-[8px] text-black/50 select-none">
        Size
       </span>
       <span class="text-[8px] select-none">
        150 ml / 5 fl. oz.
       </span>
      </div>
      <span class="font-semibold text-[14px] select-none">
       38.00 $
      </span>
     </div>
    </div>
    <!-- Order item 2 -->
    <div class="flex gap-4 border-b border-black/30 pb-4 mb-4 last:border-b-0 last:mb-0">
     <img alt="Cherry treat conditioning bottle with red liquid on light purple background" class="w-20 h-20 object-contain" height="80" src="https://storage.googleapis.com/a1aa/image/556627a9-6238-473f-ca6e-34f5a88e1da1.jpg" width="80"/>
     <div class="flex flex-col text-[10px] text-black/90 font-normal leading-[1.2]">
      <span class="font-semibold uppercase tracking-tight mb-1 select-none">
       CHERRY TREAT CONDITIONING
      </span>
      <div class="flex justify-between mb-0.5">
       <span class="uppercase text-[8px] text-black/50 select-none">
        Quantity
       </span>
       <span class="text-[8px] select-none">
        2
       </span>
      </div>
      <div class="flex justify-between mb-2">
       <span class="uppercase text-[8px] text-black/50 select-none">
        Size
       </span>
       <span class="text-[8px] select-none">
        5.6 mL / 0.19 fl. oz.
       </span>
      </div>
      <span class="font-semibold text-[14px] select-none">
       62.00 $
      </span>
     </div>
    </div>
    <!-- Order item 3 -->
    <div class="flex gap-4 border-b border-black/30 pb-4 mb-4 last:border-b-0 last:mb-0">
     <img alt="Hydrating milky toner essence bottle on light purple background" class="w-20 h-20 object-contain" height="80" src="https://storage.googleapis.com/a1aa/image/4d2e459f-ba33-49b9-e5df-81a92f0dc743.jpg" width="80"/>
     <div class="flex flex-col text-[10px] text-black/90 font-normal leading-[1.2]">
      <span class="font-semibold uppercase tracking-tight mb-1 select-none">
       HYDRATING MILKY TONER ESSENCE
      </span>
     </div>
    </div>
    <!-- Subtotal and shipping -->
    <div class="flex flex-col text-[8px] text-black/50 font-normal select-none mb-2">
     <div class="flex justify-between">
      <span>
       Subtotal
      </span>
      <span>
       141.00 $
      </span>
     </div>
     <div class="flex justify-between">
      <span>
       Shipping
      </span>
      <span>
       0.00 $
      </span>
     </div>
    </div>
    <!-- Total -->
    <div class="flex justify-between font-playfair font-normal text-[24px] select-none">
     <span>
      Total
     </span>
     <span>
      141.00 $
     </span>
    </div>
   </section>
  </div>
 </body>
</html>
