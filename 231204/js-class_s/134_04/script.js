//이미지 드랍을 진행할 공간에 대한 정의!
const fileZone = document.querySelector(".file-zone");
const imagePreviewArea = document.querySelector(".image-list");

//fileZone 영역에 이미지가 드랍되었다는 사실을 알 수 있도록 이벤트 정의!
fileZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

const displayImages = (transferedFiles) => {
  const imageFileList = [];
  const fileNum = transferedFiles.length;
  for (let i = 0; i < fileNum; i++) {
    if (transferedFiles[i].type.match("image.*") === false) {
      return;
    }
    imageFileList.push(transferedFiles[i]);
  }
  for (let imageFile of imageFileList) {
    const fileReader = new FileReader();
    console.log(fileReader);
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (e) => {
      const image = new Image();
      image.src = e.target.result;
      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  }
};

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log("event");
  const transferedFiles = e.dataTransfer.files;
  displayImages(transferedFiles);
});

// 특정요소를 활용해서 웹 브라우저 안에서 드래그&드랍기능을 사용했을 때, 드롭한 해당요소의 파일 정보를 읽어내는 이벤트 속상이 존재
//e.dataTransfer.files;
