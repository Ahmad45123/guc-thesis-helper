/*
  The file contains all the encoding/mapping required for a valid
  request.
*/

const captureTokenizedInputs = () => ({
  viewState: getInputValue("__VIEWSTATE"),
  viewStateGenerator: getInputValue("__VIEWSTATEGENERATOR"),
  eventValidation: getInputValue("__EVENTVALIDATION")
});

const captureHiddenInputs = () => ({
  mjrIdHdn: getInputValue("ContentPlaceHolderright_ContentPlaceHoldercontent_mjrIdHdn"),
  fltIdHdn: getInputValue("ContentPlaceHolderright_ContentPlaceHoldercontent_fltIdHdn"),
  sgIdHdn: getInputValue("ContentPlaceHolderright_ContentPlaceHoldercontent_sgIdHdn"),
  prtTxt: getInputValue("ContentPlaceHolderright_ContentPlaceHoldercontent_prtTxt")
});

const formatPayload = ({
  eventTarget = "",
  tokenizedInputs = {
    viewState,
    viewStateGenerator,
    eventValidation
  },
  hidden = {
    mjrIdHdn,
    fltIdHdn,
    sgIdHdn,
    prtTxt
  },
  thesisId,
  stdThesisIdLst
}) =>
  `__EVENTTARGET=${eventTarget}&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=${encodeURIComponent(
    tokenizedInputs.viewState
  )}&__VIEWSTATEGENERATOR=${encodeURIComponent(
    tokenizedInputs.viewStateGenerator
  )}&__EVENTVALIDATION=${encodeURIComponent(
    tokenizedInputs.eventValidation
  )}&ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$mjrIdHdn=${
    hidden.mjrIdHdn
  }&ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$fltIdHdn=${
    hidden.fltIdHdn
  }&ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$sgIdHdn=${
    hidden.sgIdHdn
  }&${
    stdThesisIdLst
      ? `ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$stdThesisIdLst=${
        stdThesisIdLst
      }&ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$rmvBtn=Remove+Thesis`
      : `ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$thesisIdLst=${thesisId}`
  }&ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$prtTxt=${hidden.prtTxt}`;

const generateChooseThesisBody = thesisId =>
  formatPayload({
    eventTarget: "ctl00$ctl00$ContentPlaceHolderright$ContentPlaceHoldercontent$thesisIdLst",
    tokenizedInputs: captureTokenizedInputs(),
    hidden: captureHiddenInputs(),
    thesisId
  });

const generateRemoveThesisBody = stdThesisIdLst =>
  formatPayload({
    tokenizedInputs: captureTokenizedInputs(),
    hidden: captureHiddenInputs(),
    stdThesisIdLst
  });
