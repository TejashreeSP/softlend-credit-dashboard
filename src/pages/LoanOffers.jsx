import { useState, useEffect } from "react";

import data from "../data/data.json";

import OfferCard from "../components/OfferCard/OfferCard";

import SearchBar from "../components/SearchBar/SearchBar";

import OfferFilter from "../components/OfferFilter/OfferFilter";

import ConfirmationModal from "../components/ConfirmationModal/ConfirmationModal";

import Loader from "../components/Loader/Loader";

import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

import EmptyState from "../components/EmptyState/EmptyState";

import useDebounce from "../hooks/useDebounce";

function LoanOffers() {
  const customerScore =
    data.customer.cibil_score;

  const [loading, setLoading] =
    useState(true);

  const [error] =
    useState(false);

  const [selectedOffer,
    setSelectedOffer] =
    useState(null);

  const [searchTerm,
    setSearchTerm] =
    useState("");

  const [filter,
    setFilter] =
    useState("all");

  const debouncedSearch =
    useDebounce(searchTerm);

  useEffect(() => {
    const timer =
      setTimeout(() => {
        setLoading(false);
      }, 1500);

    return () =>
      clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  let offers =
    data.loan_offers;

  offers = offers.filter(
    (offer) =>
      offer.lender
        .toLowerCase()
        .includes(
          debouncedSearch.toLowerCase()
        )
  );

  offers = offers.filter(
    (offer) => {
      const unlocked =
        customerScore >=
        offer.min_score_required;

      if (
        filter === "locked"
      )
        return !unlocked;

      if (
        filter === "unlocked"
      )
        return unlocked;

      return true;
    }
  );

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px"
      }}
    >
      <h1>Loan Offers</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={
          setSearchTerm
        }
      />

      <OfferFilter
        filter={filter}
        setFilter={setFilter}
      />

      {offers.length === 0 ? (
        <EmptyState />
      ) : (
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            score={customerScore}
            onAccept={
              setSelectedOffer
            }
          />
        ))
      )}

      {selectedOffer && (
        <ConfirmationModal
          offer={selectedOffer}
          onClose={() =>
            setSelectedOffer(
              null
            )
          }
          onConfirm={() => {
            alert(
              "Offer Accepted Successfully!"
            );

            setSelectedOffer(
              null
            );
          }}
        />
      )}
    </div>
  );
}

export default LoanOffers;