import $ from 'jquery';

$(() => {
    const dialog = document.querySelector<HTMLDialogElement>('#dialog');

    if (!dialog) {
        return;
    }

    $(document).on('click', '#trigger', () => {
        dialog.showModal();

        const $dialog = $(dialog);

        // アニメーションの開始
        $dialog.attr('data-modal-state', 'entering')
        dialog.addEventListener('transitionend', () => {
            $dialog.attr('data-modal-state', 'entered')
        }, {once: true});
    });

    $(document).on("click", "dialog", function (e) {
        if (e.target !== e.currentTarget) {
            return;
        }

        const $dialog = $(dialog);

        // アニメーションの終了
        $dialog.attr('data-modal-state', 'entered')
        $dialog.attr('data-modal-state', 'exiting')

        dialog.addEventListener('transitionend', () => {
            $dialog.attr('data-modal-state', 'exited')
            dialog.close();
        }, { once: true });
    });

    $(document).on('click', '#trigger2', () => {
        $("#dom_dialog").show();
    });

    $(document).on('click', '#dialog2close', () => {
        $("#dom_dialog").hide();
    });
});
