function djangoPage(){
    Swal.fire({
        title: 'LEER',
        html: '<div style="background:rgb(219, 219, 1);padding:5px;border-radius:15px;border:2px solid black;box-shadow:10px 10px 15px black;margin-bottom:30px;"><strong style="color:black;text-shadow:2px 2px 12px white">USUARIOS:</strong> <p style="color:white">Secretaria-Romina</p> <p style="color:white">Secretaria-Antonela</p> <p style="color:white;">Doctor-Raul</p> <p style="color:white;">Doctora-Sofia</p></div> <strong style="color:green">CONTRASEÑA:</strong>wally1234',
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
              html: '<div style="border-radius:15px;border:2px solid black;background:rgb(219, 219, 1);padding:10px;box-shadow:10px 10px 15px black;margin-bottom:30px; color:white;">Asegurate de haber leído bien los nombres de usuarios y contraseña respetando las mayusculas y guiones</div>En unos <b></b> milisegundos.',
              timer: 8000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                  const content = Swal.getContent()
                  if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                      b.textContent = Swal.getTimerLeft()
                      window.location.href = "https://django-reserva-de-turnos.herokuapp.com/"
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