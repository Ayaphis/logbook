//ver1.1.2+1.7.9
//Author: Nishisonic
//        Nekopanda
//
// �f�[�^�X�g�A�ւ̃A�N�Z�X
// �O���[�o���ϐ� data_prefix ���g���܂�
// ���W���[���̖��O�ȂǂŒ�`���Ă����Ă�������

ScriptData = Java.type("logbook.scripting.ScriptData");

// �ۑ��f�[�^��ǂ݂���
function getData(key){
	return ScriptData.getData(String(data_prefix + key));
}

// �f�[�^��ۑ�
// �V���A���C�Y�ł��Ȃ��f�[�^�̓G���[�ɂȂ�܂�
function setData(key,value){
	ScriptData.setData(String(data_prefix + key),value);
}

// �f�[�^���ꎞ�I�Ɋi�[
// �f�[�^�͍q�C�����I�����Ɏ����܂����A�V���A���C�Y�E�s��₢�܂���
// getTmpData()�͂���܂���B�f�[�^�̓ǂݏo����getData()�BgetTmpData()�͂���܂���B
function setTmpData(key,value){
	ScriptData.setData(String(data_prefix + key),value,false);
}
