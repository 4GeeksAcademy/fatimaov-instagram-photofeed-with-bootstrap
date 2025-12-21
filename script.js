
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalTitles = document.querySelectorAll('.modal-h2');
const modalCaptions = document.querySelectorAll('.modal-caption');

// Grid Feed modals
modalTriggers.forEach((x, i) => {
    const target = x.querySelector('.modal-target').dataset.bsTarget.slice(1);
    const img = x.querySelector('.modal-img');
    const title = modalTitles[i].innerHTML;
    const caption = modalCaptions[i].innerHTML;

    x.innerHTML += `   <!-- modal -->
                        <div class="modal fade" id="${target}"
                            tabindex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered fixed-width">
                                <div class="modal-content">
                                    <!-- modal header -->
                                    <div class="modal-header d-flex justify-content-between py-3 ">
                                        <h2 class="modal-title h5 m-0 fw-bold" id="exampleModalLabel">${title}</h2>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <!-- modal img -->
                                    <img class="img-fluid" src="${img.src}" alt="${img.alt}"/>
                                    <!-- modal body -->
                                    <div class="modal-body">
                                        <p class="fw-bold"><i class="bi bi-heart-fill"></i> 204 likes</p>
                                        <p class="card-text">${caption}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end modal -->                       
                    `;
})



// BS Tooltips
const toolTips = document.querySelectorAll('.tt');

toolTips.forEach(t => {
    new bootstrap.Tooltip(t);
})


// Reload page when navbar logo is clicked
document.getElementById('navbar-logo').onclick = () => {
    window.location.reload();
};



