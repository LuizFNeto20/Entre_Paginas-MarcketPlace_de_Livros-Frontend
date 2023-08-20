import './EnderecoForm.scss';

interface indexId {
    idUsuario: string | null;
}

export default function EnderecoForm({ idUsuario }: indexId) {
    return (
        <div className='endereco-form'>
            <h1>Endereço</h1>
            <form>
                <div className='endereco-form__input'>
                    <label htmlFor='cep'>CEP</label>
                    <input type='text' name='cep' id='cep' />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='logradouro'>Logradouro</label>
                    <input type='text' name='logradouro' id='logradouro' />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='bairro'>Bairro</label>
                    <input type='text' name='bairro' id='bairro' />
                </div>
                <div className='endereco-form__input'>
                    <label htmlFor='cidade'>Cidade</label>
                    <input type='text' name='cidade' id='cidade' />
                </div>
            </form>
        </div>
    )
}