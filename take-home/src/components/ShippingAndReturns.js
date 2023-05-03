export const ShippingAndReturns = ({ isOpen, toggleShipping }) => {
  return (
    <div className="border mb-3  border-black rounded-md overflow-hidden">
      <div
        className="px-4 py-3 flex justify-between items-center cursor-pointer h-8"
        onClick={toggleShipping}
      >
        <h3 className="text-sm text-gray-800">Shipping and Returns</h3>
        <svg
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="border-t border-black  px-4 py-3">
          <div className="mb-5">
            <p className="text-gray-800 text-[14px]">
              STANDARD SHIPPING <br />
              Free for orders over $75. <br />
              Within the US, the estimated transit period is 6-11 business days,
              depending on the delivery address.
              <br />
              Within the AU & UK, the estimated transit period is 5-11 business
              days, depending on the delivery address. <br />
              Within DE, the estimated transit period is 10-15 business days,
              depending on the delivery address.
              <br />
            </p>
          </div>
          <div className="mb-5">
            <p className="text-gray-800 text-[14px]">
              EXPRESS SHIPPING <br />
              Within the US, the estimated transit period is 2-5 business days,
              depending on the delivery address. <br />
              Within the UK, the estimated transit period is 2-5 business days,
              depending on the delivery address
              <br />
              Express shipping is not yet available to customers in AU and DE.
              <br />
            </p>
          </div>

          <div>
            <p className="text-gray-800 text-[14px]">
              FREE RETURNS & EXCHANGES <br />
              You can return or exchange your items from domestic orders easily
              with free shipping by clicking<span>&nbsp;</span>
              <a
                className="text-gray-500"
                href="https://finesse.loopreturns.com/#/"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              <span>&nbsp;</span>
              and following the returns process.
              <br />
              For free international returns shipping, just shoot us an email at
              <span>&nbsp;</span>
              <a
                className="text-gray-500"
                href="mailto:rewind@finesse.us"
                target="_blank"
                title="rewind@finesse.us"
                rel="noopener noreferrer"
              >
                rewind@finesse.us
              </a>
              <span>&nbsp;</span>
              to get it started!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
