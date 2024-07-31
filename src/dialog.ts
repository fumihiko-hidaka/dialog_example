import $ from 'jquery';

$(() => {
    const dialog = document.querySelector<HTMLDialogElement>('#dialog');

    if (!dialog) {
        return;
    }

    $(document).on('click', '#trigger', () => {
        dialog.showModal();
    })

    $(document).on('click', '#trigger2', () => {
        $("#dom_dialog").show();
    })

    $(document).on('click', '#dialog2close', () => {
        $("#dom_dialog").hide();
    });

    $(document).on("click", "dialog", function (e) {
        if (e.target !== e.currentTarget) {
            return;
        }

        dialog.close();
    });
});
