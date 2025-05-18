import { Star, CheckCircle } from "lucide-react";

export default function ProductReviews() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-white text-2xl md:text-3xl lg:text-3xl font-bold mb-12 text-center">
        The Most KEYBOARD I've Ever Seen!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {/* Testimonial 1 */}
        <div className="h-full w-full bg-black/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-white fill-white" />
            ))}
          </div>

          <p className="text-white mb-6">
            "I have dreamed of getting a magical box from Wizard Ollis for
            years, and I finally got one! I was absolutely overjoyed when I
            opened the box and all the wonders inside. It was the best gift I
            ever received. 10/10 would recommend!"
          </p>

          <div className="mt-auto flex flex-col justify-center items-center">
            <p className="text-white font-semibold text-lg">
              Peter the Mysterious
            </p>
            <div className="flex items-center mt-1">
              <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
              <span className="text-pink-500">Verified Buyer</span>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-black/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-white fill-white" />
            ))}
          </div>

          <p className="text-white mb-6">
            "I was absolutely mesmerized when I opened the magical box from
            Wizard Czar. It was filled with wondrous items that I could not have
            imagined. It was truly a magical experience. 10/10 would recommend!"
          </p>

          <div className="mt-auto flex flex-col justify-center items-center">
            <p className="text-white font-semibold text-lg">
              Jessica the Magnificent
            </p>
            <div className="flex items-center mt-1">
              <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
              <span className="text-pink-500">Verified Buyer</span>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-black/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-white fill-white" />
            ))}
          </div>

          <p className="text-white mb-6">
            "The magical box from Wizard Wren was like a dream come true. It was
            filled with delightful items that I couldn't have even imagined. It
            was truly a magical experience. 10/10 would recommend!"
          </p>

          <div className="mt-auto flex flex-col justify-center items-center">
            <p className="text-white font-semibold text-lg">
              John the Fantastic
            </p>
            <div className="flex items-center mt-1">
              <CheckCircle className="w-5 h-5 text-pink-500 mr-2" />
              <span className="text-pink-500">Verified Buyer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
