import React from 'react';

export default function HomeFilterButton({ selected, onClick, children }: any) {
  return (
    <>
      {selected ? (
        <button
          className="bg-gray-400 mx-2 rounded-2xl p-1 px-3 "
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button className="mx-2 rounded-2xl bg-transparent p-1 px-3 hover:bg-gray-400" onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
}
