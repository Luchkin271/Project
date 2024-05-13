function ready() {
    alert('DOM готов');

    // изображение ещё не загружено (если не было закешировано), так что размер будет 0x0
    alert(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener("DOMContentLoaded", ready);