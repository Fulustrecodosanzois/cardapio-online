"use client"

import React, { useEffect, useState } from 'react';
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';
import firebaseApp from '@/lib/firebase';
import { Badge } from '@/components/ui/badge';
import { CATEGORIA_ICON } from "@/constants/categoria-icon";
import ProdutosPorCategoria from './components/produtos';
import SelecionarTamanhoProduto from './components/selecionarTamanhoProduto';

const CategoriaProdutos = ({ params }) => {
    const [produtos, setProdutos] = useState([]);
    const [categoriaId, setCategoriaId] = useState(null);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            const db = getDatabase(firebaseApp);
            const categoriaRef = ref(db, 'categoria');

            const categoriaQuery = query(categoriaRef, orderByChild('slug'), equalTo(params.slug));
            const categoria = await get(categoriaQuery);
            
            if (categoria.exists()) {
                categoria.forEach((child) => {
                    const categoriaId = child.key;
                    setCategoriaId(categoriaId);
                    const produtosRef = ref(db, `categoria/${categoriaId}/produtos`);
                    
                    get(produtosRef).then((produtos) => {
                        if (produtos.exists()) {
                            const produtosData = produtos.val();
                            const produtosArray = Object.values(produtosData);
                            setProdutos(produtosArray);
                        } else {
                            console.log('Não foram encontrados produtos para esta categoria.');
                        }
                    }).catch((error) => {
                        console.error('Erro ao buscar produtos:', error);
                    });
                });
            } else {
                console.log('Categoria não encontrada.');
            }
        };
        
        fetchProdutos();
    }, [params.slug]);

    return (
        <div className="p-5">
            <Badge className="bg-secondary-foreground text-primary px-4 py-2 border-primary rounded-full uppercase hover:bg-secondary-foreground">
                {CATEGORIA_ICON[params.slug]}
                <span className="text-xs font-bold ml-1">{params.slug}</span>
            </Badge>

            <SelecionarTamanhoProduto 
                categoriaSelecionada={params.slug} 
                setTamanhoSelecionado={setTamanhoSelecionado} 
            />
            
            <ProdutosPorCategoria 
                produtos={produtos}
                categoriaSelecionada={categoriaId}
                tamanhoSelecionado={tamanhoSelecionado}
            />
        </div>
    );
};

export default CategoriaProdutos;
