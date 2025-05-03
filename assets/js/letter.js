document.addEventListener("DOMContentLoaded", function() {
  const waxStamp = document.querySelector('.wax-stamp');
  const flap = document.querySelector('.flap');
  const letterFolded = document.querySelector('.letter-folded');
  const foldTop = document.querySelector('.fold.fold-top');
  const foldBottom = document.querySelector('.fold.fold-bottom');
  const envelopeAnimation = document.getElementById('envelope-animation');
  const letterContent = document.getElementById('letter-content');

  // 1) Break the seal at 1s
  setTimeout(() => {
    waxStamp.classList.add('animate-seal');
  }, 1000);

  // 2) After 2s, hide wax stamp & open flap
  setTimeout(() => {
    waxStamp.style.display = 'none';
    flap.classList.add('animate-flap');
  }, 2000);

  // 3) After 3.5s, reveal folded letter & slide it out from behind flap
  setTimeout(() => {
    letterFolded.classList.remove('hidden');
    letterFolded.classList.add('animate-slide');
  }, 3500);

  // 4) After 4.5s, unfold top & bottom folds
  setTimeout(() => {
    foldTop.classList.add('animate-unfold-top');
    foldBottom.classList.add('animate-unfold-bottom');
  }, 4500);

  // 5) After 6s, expand the letter for a bigger, noticeable effect
  setTimeout(() => {
    letterFolded.classList.add('animate-expand');
  }, 6000);

  // 6) Finally, at 7s, hide envelope & show letter content
  setTimeout(() => {
    envelopeAnimation.style.display = 'none';
    letterContent.classList.remove('hidden');
  }, 7000);
});
