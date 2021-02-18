function djangoPage(){
    Swal.fire({
        title: 'LEER',
        html: '<div style="background:red;padding:5px;border-radius:15px;border:2px solid black;box-shadow:10px 10px 15px black;margin-bottom:30px;"><strong style="color:black;text-shadow:2px 2px 12px white">USUARIOS:</strong> <p style="color:white">Secretaria-Romina</p> <p style="color:white;">Doctor-Raul</p> <p style="color:white;">Doctora-Sofia</p></div> <strong style="color:green">CONTRASEÑA:</strong>wally 1234',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Leí bien'
      }).then((result) => {
        
        if (result.isConfirmed) {
            let timerInterval
            Swal.fire({
              title: 'Redirigiendo',
              html: 'En unos <b></b> milisegundos.',
              timer: 5000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                      window.location.href = "https://github.com/Walter-Damian-Diaz/DJANGO-reserva-de-turnos-para-una-clinica"
                    }
                  }
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })

        }
      })
}