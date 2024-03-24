import { CardList, AddCardForm, AddCardFinish, CardInfoWithId } from 'nextstep-payments-gn0lee';

function App() {
	const handleAddCard = (card: CardInfoWithId) => {
		alert(
			`카드가 추가되었습니다. 카드 번호: ${card.cardNumberFirstSegment}-${card.cardNumberSecondSegment}-${card.cardNumberThirdSegment}-${card.cardNumberFourthSegment}`,
		);
	};

	const handleDeleteCard = (id: string) => {
		alert(`카드가 삭제되었습니다. 카드 id: ${id}`);
	};

	const handleUpdateCard = (card: CardInfoWithId) => {
		alert(`카드가 수정되었습니다. 카드 별칭: ${card.cardNickname}`);
	};

	return (
		<>
			<CardList onDelete={handleDeleteCard} />
			<AddCardForm onSubmit={handleAddCard} />
			<AddCardFinish onUpdate={handleUpdateCard} />
		</>
	);
}

export default App;
