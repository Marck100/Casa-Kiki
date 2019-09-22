setPickerElement()
loadPicker()

function loadPicker() {



    $('select').on('change', function() {
        const preference = this.value

        localStorage.setItem("language", preference)

        location.reload()

    });

}

function setPickerElement() {

    var preference = localStorage.getItem("language")

    if (preference === undefined) {

        preference = "en"

    }

    $('select').val(preference).change();

}