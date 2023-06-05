import Container from '@/components/Container'
import EmptyState from '../../components/EmptyState'
import FinishClient from './FinishClient'

export default async function Home() {
    return (
        <Container>
            <EmptyState 
                title='測驗已經結束，看你想加什麼'
                subtitle='如沒要加什麼，就差不多'
            />
            <FinishClient />
        </Container>
    )
}
