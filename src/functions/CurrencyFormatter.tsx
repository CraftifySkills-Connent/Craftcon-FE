import React from "react";

interface CurrencyFormatterProps {
  value: number | null | undefined;
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  showCurrency?: boolean;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({
  value,
  locale = "en-NG",
  currency = "NGN",
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
  showCurrency = true,
}) => {
  const formatToCurrency = (number: number | null | undefined): string => {
    if (number == null || isNaN(number)) {
      number = 0;
    }

    const options: Intl.NumberFormatOptions = {
      minimumFractionDigits,
      maximumFractionDigits,
    };

    if (showCurrency) {
      options.style = "currency";
      options.currency = currency;
    }

    return new Intl.NumberFormat(locale, options).format(number);
  };

  return (
    <span className="text-[10px] md:text-[14px] text-[#667085] font-medium">
      {formatToCurrency(value)}
    </span>
  );
};

export default CurrencyFormatter;
