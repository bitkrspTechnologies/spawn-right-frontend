"use client";
import React from "react";

interface SpecificationRow {
  feature: string;
  values: (string | null)[];
}

interface ComparisonTableProps {
  products: number;
  specifications: SpecificationRow[];
  prices: string[];
}

export default function ComparisonTable({
  products,
  specifications,
  prices,
}: ComparisonTableProps) {
  const [highlightDifferences, setHighlightDifferences] = React.useState(false);

  const isDifferent = (values: (string | null)[], index: number) => {
    if (!highlightDifferences) return false;
    const baseValue = values.find((v) => v !== null);
    return values[index] !== baseValue && values[index] !== null;
  };

  const renderCell = (
    value: string | null,
    rowIndex: number,
    colIndex: number
  ) => {
    const isDiff = isDifferent(specifications[rowIndex].values, colIndex);

    if (value === null)
      return <td className="text-center py-2 text-gray-400">-</td>;

    return (
      <td
        className={`text-center py-2 ${
          isDiff ? "text-purple-500 font-medium" : ""
        }`}
      >
        {value}
      </td>
    );
  };

  return (
    <div className="w-full">
      {/* Header tabs */}
      <div className="flex mb-2 border-b border-gray-700 pb-2">
        <button
          className={`px-4 py-1 rounded-t-lg mr-2 ${
            !highlightDifferences
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setHighlightDifferences(false)}
        >
          Specification
        </button>
        <button
          className={`flex items-center px-4 py-1 rounded-t-lg ${
            highlightDifferences
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setHighlightDifferences(true)}
        >
          <div
            className={`w-4 h-4 border mr-2 ${
              highlightDifferences
                ? "border-purple-500 bg-purple-500"
                : "border-gray-400"
            }`}
          ></div>
          Highlight Differences
        </button>
      </div>

      {/* Product headers */}
      <div className="grid grid-cols-5 gap-2 mb-4">
        <div></div> {/* Empty cell for feature names */}
        {Array.from({ length: products }).map((_, i) => (
          <div key={i} className="bg-gray-800 p-2 rounded-lg text-center">
            <div className="text-sm font-medium mb-1">GAMING KEYBOARD</div>
            <div className="text-xs text-gray-400 mb-1">(0.00-0.00)</div>
            <button className="bg-purple-600 text-white text-xs py-1 px-2 rounded w-full">
              BUY NOW
            </button>
            <div className="text-lg font-bold mt-1">${200 + i * 50}</div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {/* Group headers */}
            <tr className="bg-gray-900">
              <td
                colSpan={products + 1}
                className="py-2 px-3 text-xs text-white font-semibold"
              >
                KEY FEATURES
              </td>
            </tr>

            {specifications.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-800" : "bg-gray-900"}
              >
                <td className="py-2 px-3 text-xs text-gray-300">
                  {row.feature}
                </td>
                {row.values.map((value, colIndex) =>
                  renderCell(value, rowIndex, colIndex)
                )}
              </tr>
            ))}

            {/* Price section */}
            <tr className="bg-gray-900">
              <td
                colSpan={products + 1}
                className="py-2 px-3 text-xs text-white font-semibold"
              >
                PRICE DETAILS
              </td>
            </tr>
            <tr className="bg-gray-800">
              <td className="py-2 px-3 text-xs text-gray-300">Price</td>
              {prices.map((price, i) => (
                <td key={i} className="text-center py-2 font-medium">
                  {price}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
