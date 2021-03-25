const element = document.querySelectorAll('#tel');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
element.forEach((event) => {
	IMask(event, maskOptions);
})
