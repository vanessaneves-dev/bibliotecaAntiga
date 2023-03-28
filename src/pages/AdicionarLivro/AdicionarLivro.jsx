import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function AdicionarLivro() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        console.log(data)
        // salvar no banco de dados
    }

    return (
        <div className="adicionar-livro">
            <Container>
                <h1>Adicionar livro</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" {...register("titulo", {required:true, maxLength: 255})} />
                        <Form.Text className="text-muted">
                            {/* messagem de validação */}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" {...register("autor", {required:true, maxLength: 255})} />
                        <Form.Text className="text-muted">
                            {/* messagem de validação */}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control type="text" {...register("categoria", {required:true, maxLength: 255})} />
                        <Form.Text className="text-muted">
                            {/* messagem de validação */}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" {...register("isbn", {required:true, maxLength: 255})} />
                        <Form.Text className="text-muted">
                            {/* messagem de validação */}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Imagem da capa</Form.Label>
                        <Form.Control type="url" {...register("urlCapa", {required:true})} />
                        <Form.Text className="text-muted">
                            {/* messagem de validação */}
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="success">Adicionar</Button>
                </Form>
            </Container>
        </div>
    )
}