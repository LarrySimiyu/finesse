export const SizeGuide = ({ sizeGuideOpen, toggleSizeGuide }) => {
  return (
    <div className="border  border-black rounded-md overflow-hidden">
      <div
        className="px-4 py-3 flex justify-between items-center cursor-pointer h-8"
        onClick={toggleSizeGuide}
      >
        <h3 className="text-sm text-gray-800">Size Guide</h3>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            sizeGuideOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
          />
        </svg>
      </div>
      {sizeGuideOpen && (
        <div className="border-t border-black text-[12px] px-2 py-3">
          <div className="grid grid-cols-6 gap-2">
            <div className="font-bold">Size</div>
            <div className="font-bold">US</div>
            <div className="font-bold">Bust</div>
            <div className="font-bold">Waist</div>
            <div className="font-bold">Hip</div>
            <div className="font-bold">Inseam</div>

            <div>XS</div>
            <div>0-2</div>
            <div>33.5"</div>
            <div>25.5"</div>
            <div>36.5"</div>
            <div>32"</div>

            <div>S</div>
            <div>4-6</div>
            <div>35"</div>
            <div>27"</div>
            <div>38"</div>
            <div>32"</div>

            <div>M</div>
            <div>8-10</div>
            <div>37"</div>
            <div>29"</div>
            <div>40"</div>
            <div>32"</div>

            <div>L</div>
            <div>12-14</div>
            <div>39"</div>
            <div>31"</div>
            <div>42"</div>
            <div>32"</div>

            <div>XL</div>
            <div>14-16</div>
            <div>41"</div>
            <div>33"</div>
            <div>44"</div>
            <div>32"</div>

            <div>1X</div>
            <div>16-18</div>
            <div>45"</div>
            <div>40"</div>
            <div>50"</div>
            <div>33.5"</div>

            <div>2X</div>
            <div>18-20</div>
            <div>47"</div>
            <div>42"</div>
            <div>52"</div>
            <div>33.5"</div>

            <div>3X</div>
            <div>20-22</div>
            <div>49"</div>
            <div>44"</div>
            <div>54"</div>
            <div>33.5"</div>
          </div>
        </div>
      )}
    </div>
  );
};
